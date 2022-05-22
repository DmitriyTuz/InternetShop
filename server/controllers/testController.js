class TestController {
    async test(req, res) {

    return res.send("успешный тест !")
    }
}

module.exports = new TestController()