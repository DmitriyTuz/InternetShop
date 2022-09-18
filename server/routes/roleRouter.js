const Router = require('express')
const router = new Router()
const roleController = require('../controllers/roleController')

// const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/', roleController.getAll)
// router.get('/:id', typeController.getOne)
//
router.post('/create', /*checkRole('ADMIN'),*/ roleController.create)
//
//
// router.put("/edit", checkRole('ADMIN'), typeController.edit)
//
// router.delete("/delete/:id", checkRole('ADMIN'), typeController.delete)

module.exports = router