class HomeController {
  async index(req, res) {
    res.json('Welcome');
  }
}

export default new HomeController();
