const router = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');
const categoryController = require('../controllers/categoryController');
const filmController = require('../controllers/filmController');
const healthController = require('../controllers/healthController');

router.get('/api/v1/health', healthController.health);

router.post('/api/v1/createAuthor', filmController.createAuthor);
router.get('/api/v1/findAuthor', filmController.findAuthors);
router.get('/api/v1/findAuthor/:id', filmController.findAuthor);
router.delete('/api/v1/findAuthor/:id', filmController.deleteAuthor);
router.put('/api/v1/putAuthor/:id', filmController.putAuthor);

router.post('/api/v1/createBook', filmController.createBook);
router.get('/api/v1/findBook', filmController.findBooks);
router.get('/api/v1/findBook/:id', filmController.findBook);
router.delete('/api/v1/findBook/:id', filmController.deleteBook);
router.put('/api/v1/putBook/:id', filmController.putBook);

router.post('/api/v1/createComment', filmController.createComment);
router.get('/api/v1/findComment', filmController.findComments);
router.get('/api/v1/findComment/:id', filmController.findComment);
router.delete('/api/v1/findComment/:id', filmController.deleteComment);
router.put('/api/v1/putComment/:id', filmController.putComment);

router.post('/api/v1/createRating', filmController.createRating);
router.get('/api/v1/findRating', filmController.findRatings);
router.get('/api/v1/findRating/:id', filmController.findRating);
router.delete('/api/v1/findRating/:id', filmController.deleteRating);
router.put('/api/v1/putRating/:id', filmController.putRating);

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
