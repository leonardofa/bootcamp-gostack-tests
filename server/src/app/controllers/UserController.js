import User from '../models/User';

class UserController {
  async store(req, res) {
    if (req.body.email === 'leonardo.fa@gmail.com') {
      return res.status(400).json({ error: 'email not allowed' });
    }
    const user = await User.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
