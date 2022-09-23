const Router = require('express')
const router = new Router()
const user_roleController = require('../controllers/user_roleController')


router.post('/create', user_roleController.create)
router.get('/', user_roleController.getAll)
router.get('/getAllUsersWithRoles', user_roleController.getAllUsersWithRoles)

router.get('/getUserWithRolesByUserId', user_roleController.getUserWithRolesByUserId)
router.get('/getArrayOfUserRolesByUserId', user_roleController.getArrayOfUserRolesByUserId)

router.delete("/deleteAllRolesFromUserByUserId", user_roleController.deleteAllRolesFromUserByUserId)
// router.delete("/deleteRoleFromUserWithIdByRoleId", user_roleController.deleteRoleFromUserWithIdByRoleId)
router.delete("/deleteRoleFromUserWithIdByRoleValue", user_roleController.deleteRoleFromUserWithIdByRoleValue)

router.put("/changeOldRoleOnNewRoleByUserId", user_roleController.changeOldRoleOnNewRoleByUserId)

//
// router.put("/edit", basket_deviceController.edit)


module.exports = router