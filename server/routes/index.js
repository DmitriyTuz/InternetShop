const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const basketRouter = require('./basketRouter')
const basket_deviceRouter = require('./basket_deviceRouter')
const ratingRouter = require('./ratingRouter')
const device_infoRouter = require('./device_infoRouter')
const roleRouter = require('./roleRouter')
const user_roleRouter = require('./user_roleRouter')

const testRouter = require('./testRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/basket', basketRouter)
router.use('/basket_device', basket_deviceRouter)
router.use('/rating', ratingRouter)
router.use('/device_info', device_infoRouter)
router.use('/role', roleRouter)
router.use('/user_role', user_roleRouter)

router.use('/test', testRouter)

module.exports = router