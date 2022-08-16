const prisma = require("../config/database.js")

class LiderService {
  create(name, age) {
    return prisma.lider.create({
      data: {
        name,
        age
      }
    })
  }

  getAll() {
    return prisma.lider.findMany()
  }

  update(id, name, age) {
    return prisma.lider.update({
      where: {
        id: id
      },
      data: {
        name: name,
        age: age
      }
    })
  }

  delete(id) {
    return prisma.lider.delete({
      where: {
        id: id
      }
    })
  }
}

module.exports = LiderService