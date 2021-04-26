const router = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');
const categoryController = require('../controllers/categoryController');
const filmController = require('../controllers/filmController');
const healthController = require('../controllers/healthController');

router.get('/api/v1/health', healthController.health);

router.post('/api/v1/create', filmController.createFilm);
router.get('/api/v1/find', filmController.findFilms);
router.get('/api/v1/find/:id', filmController.findFilm);
router.delete('/api/v1/find/:id', filmController.deleteFilm);
router.put('/api/v1/put/:id', filmController.putFilm);

router.post('/api/v1/sign-up', userController.registration);
router.post('/api/v1/sign-in', userController.login);
router.get('/api/v1/auth', authMiddleware, userController.check);
router.get('/api/v1/getUsers', userController.getUsers);

router.post('/api/v1/createCategory', categoryController.createCategory);
router.put('/api/v1/changeCategory/:id', categoryController.changeCategory);
router.delete('/api/v1/delCategory/:id', categoryController.deleteCategory);
router.get('/api/v1/findCategory', categoryController.findCategory);
router.get('/api/v1/findCategory/:id', categoryController.findOneCategory);

module.exports = router;
