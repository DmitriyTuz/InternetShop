const Router = require('express')
const router = new Router()
const roleController = require('../controllers/roleController')

// const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/', roleController.getAll)
router.get('/:id', roleController.getById)

router.post('/createRole', /*checkRole('ADMIN'),*/ roleController.createRole)

router.delete('/deleteRole', roleController.deleteRole)
//
// router.put("/edit", checkRole('ADMIN'), typeController.edit)
//
// router.delete("/delete/:id", checkRole('ADMIN'), typeController.delete)

module.exports = router