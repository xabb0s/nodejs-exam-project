const { Router } = require("express")
const LiderBl = require("../bl/lider.bl.js")

const router = Router()
const liderBl = new LiderBl()

router.get("/lider", async (req, res) => {
  const result = await liderBl.getAll()

  res.json({
    status: result.status,
    msg: result.msg,
    data: result.data
  })
})

router.post("/lider", async (req, res) => {
  const { name, age } = req.body
  
  if(!name) {
    res.json({
      status: "bad",
      msg: "Name not provided."
    })
    return
  }
  if(!age) {
    res.json({
      status: "bad",
      msg: "Age not provided."
    })
    return
  }
  
  const result = await liderBl.create(name, age)

  res.json({
    status: result.status,
    msg: result.msg,
    data: result.data
  })
})

router.put("/lider/:id", async (req, res) => {
  const { name, age } = req.body
  const id = +req.params.id
  
  if(!name) {
    res.json({
      status: "bad",
      msg: "Name not provided."
    })
    return
  }
  if(!age) {
    res.json({
      status: "bad",
      msg: "Age not provided."
    })
    return
  }
  if(!id) {
    res.json({
      status: "bad",
      msg: "Id not provided."
    })
    return
  }

  const result = await liderBl.update(id, name, age)

  res.json({
    status: result.status,
    msg: result.msg,
    data: result.data
  })
})

router.delete("/lider", (req, res) => {
  res.json({
    status: "bad",
    msg: "Id not provided."
  })
  return
})

router.delete("/lider/:id", async (req, res) => {
  const id = +req.params.id

  const result = await liderBl.delete(id)

  res.json({
    status: result.status,
    msg: result.msg,
    data: result.data
  })
})

module.exports = router