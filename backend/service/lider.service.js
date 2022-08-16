const prisma = require("../config/database.js")

class LiderService {
  create(name, age, job) {
    return prisma.lider.create({
      data: {
        name: name,
        age: age,
        job: job
      }
    })
  }

  getAll() {
    return prisma.lider.findMany()
  }

  update(id, name, age, job) {
    return prisma.lider.update({
      where: {
        id: id
      },
      data: {
        name: name,
        age: age,
        job: job
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