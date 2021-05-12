class HomeController {
  index(req, res) {
    res.json({
      tudoOk: true,
    });
  }
}

export default new HomeController();
