const LiderService = require("../service/lider.service.js")
const { response } = require("../utils/response.js")

const liderService = new LiderService()

class LiderBl {
  async create(name, age) {
    try {
      const lider = await liderService.create(name, age)

      return response("ok", "Lider successfully created.", lider)
    } catch (err) {
      return response("bad", "Cannot create lider.", err)
    }
  }

  async getAll() {
    try {
      const liders = await liderService.getAll()

      return response("ok", "All Liders retrived.", liders)
    } catch (err) {
      return response("bad", "Cannot get Liders.", err)
    }
  }

  async update(id, name, age) {
    try {
      const lider = await liderService.update(id, name, age)

      return response("ok", "Lider successfully updated.", lider)
    } catch (err) {
      return response("bad", "Cannot update lider.", err)
    }
  }

  async delete(id) {
    try {
      const lider = await liderService.delete(id)

      return response("ok", "Lider successfully deleted.", lider)
    } catch (err) {
      return response("bad", "Cannot delete lider.", err)
    }
  }
}

module.exports = LiderBl