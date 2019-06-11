const { connect } = require('./ComidasRepository')
const comidasModel = require ('./ComidasSchema')
connect()

const getAll = async () => {
  return comidasModel.find((error, comidas) => {
    if (error) {
      console.error(error)
    }
    return comidas
  })
}

const getById = async (id) => {
  const comidasModel.findById(
    id,
    (error, comida) => {
  }
  )

}

const add = (comida) => {
 const novaComida = new comidasModel({
   nome: comida.nome,
   descricao: comida.descricao
 })

 novaComida.save()

}

const remove = (id) => {
  comidas.pratosFavoritos = getAll().filter((comida) => {
    return comida.id !== id
  })
}

const update = (id, comida) => {
  let comidaCadastrada = getAll().find(comida => {
    return comida.id === id
  })

  if(comidaCadastrada === undefined){ // nao encontrou a comida
    return false
  }
  else {
    if(comida.nome !== undefined) {
      comidaCadastrada.nome = comida.nome
    }
    if(comida.descricao !== undefined) {
      comidaCadastrada.descricao = comida.descricao
    }

    return true
  }
}

module.exports = {
  getAll,
  add,
  remove,
  update,
  getById
}