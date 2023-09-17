const model = require('./model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function get_usuario(filtroUsuario) {
  let filtro = {};
  if (filtroUsuario) {
    filtro = { usuari: filtroUsuario };
  }
  return model.find(filtro);
}

function add_usuario(usuario) {
  const objeto = new model(usuario);
  return objeto.save();
}

async function update_usuario(usuario) {
  const objeto = await model.findOne({ usuari: usuario.usuari });

  if (objeto) {
    objeto.nombre = usuario.nombre;
    objeto.email = usuario.email;
    objeto.celular = usuario.celular;
    objeto.usuari = usuario.usuari;
    objeto.contraseña = usuario.contraseña;

    return await objeto.save();
  } else {
    return null;
  }
}

async function delete_usuario(usuari) {
  return await model.deleteOne({ usuari: usuari });
}

async function login_usuario(usuario, contraseña) {
  try {
    const usuarioEncontrado = await model.findOne({ usuari: usuario });

    if (!usuarioEncontrado) {
      throw new Error('Usuario no encontrado');
    }

    // Verificar la contraseña utilizando bcrypt
    const contraseñaValida = await bcrypt.compare(
      contraseña,
      usuarioEncontrado.contraseña
    );

    if (!contraseñaValida) {
      throw new Error('Contraseña incorrecta');
    }

    // Generar un token de autenticación con una cadena secreta directa
    const token = jwt.sign({ id: usuarioEncontrado._id }, 'mi_secreto_secreto', {
      expiresIn: '1d',
    });

    return { token };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  add: add_usuario,
  get: get_usuario,
  update: update_usuario,
  delete: delete_usuario,
  login: login_usuario,
};