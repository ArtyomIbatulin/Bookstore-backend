const router = require('express').Router();
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');
const categoryController = require('../controllers/categoryController');
const authorController = require('../controllers/authorController');
const bookController = require('../controllers/bookController');
const commentController = require('../controllers/commentController');
const ratingController = require('../controllers/ratingController');
const healthController = require('../controllers/healthController');

router.get('/api/v1/health', healthController.health);

router.post('/api/v1/createAuthor', authorController.createAuthor);
router.get('/api/v1/findAuthor', authorController.findAuthors);
router.get('/api/v1/findAuthor/:id', authorController.findAuthor);
router.delete('/api/v1/findAuthor/:id', authorController.deleteAuthor);
router.put('/api/v1/putAuthor/:id', authorController.putAuthor);

router.post('/api/v1/createBook', bookController.createBook);
router.get('/api/v1/findBook', bookController.findBooks);
router.get('/api/v1/findBook/:id', bookController.findBook);
router.delete('/api/v1/findBook/:id', bookController.deleteBook);
router.put('/api/v1/putBook/:id', bookController.putBook);

router.post('/api/v1/createComment', commentController.createComment);
router.get('/api/v1/findComment', commentController.findComments);
router.get('/api/v1/findComment/:id', commentController.findComment);
router.delete('/api/v1/findComment/:id', commentController.deleteComment);
router.put('/api/v1/putComment/:id', commentController.putComment);

// user-rating
// показывает 1 категорию на книге ...
router.post('/api/v1/createRating', ratingController.createRating);
router.get('/api/v1/findRating', ratingController.findRatings);
router.get('/api/v1/findRating/:id', ratingController.findRating);
router.delete('/api/v1/findRating/:id', ratingController.deleteRating);
router.put('/api/v1/putRating/:id', ratingController.putRating);

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
