const Router = require('express')
const router = new Router()
const user_roleController = require('../controllers/user_roleController')


router.post('/create', user_roleController.create)
router.get('/', user_roleController.getAll)
// router.get('/getById/:id', basket_deviceController.getOne)
router.get('/getArrayOfUserRoles', user_roleController.getArrayOfUserRoles)
//
// router.delete("/delete/:id", basket_deviceController.delete)
//
// router.put("/edit", basket_deviceController.edit)


module.exports = router