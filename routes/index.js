const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const checkRole = require("../middleware/checkRoleMiddleware");
const userController = require("../controllers/userController");
const categoryController = require("../controllers/categoryController");
const authorController = require("../controllers/authorController");
const bookController = require("../controllers/bookController");
const commentController = require("../controllers/commentController");
const ratingController = require("../controllers/ratingController");
const healthController = require("../controllers/healthController");
const ordersController = require("../controllers/ordersController");
const multer = require("multer");

const uploadDestination = "uploads";

const storage = multer.diskStorage({
  destination: uploadDestination,
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploads = multer({ storage: storage });

router.get("/api/v1/health", healthController.health);

router.post(
  "/api/v1/create-author",
  checkRole("admin"),
  authorController.createAuthor
);
router.get("/api/v1/get-authors", authorController.findAuthors);
router.get("/api/v1/find-author/:id", authorController.findAuthor);
router.delete("/api/v1/find-author/:id", authorController.deleteAuthor);
router.put("/api/v1/change-author/:id", authorController.putAuthor);

router.post(
  "/api/v1/create-book",
  checkRole("admin"),
  bookController.createBook
);
router.get("/api/v1/get-books", bookController.findBooks);
// router.get("/api/v1/get-books-pagin", bookController.pagBookfindAll);
router.get("/api/v1/book/:id", bookController.findBook);
router.delete("/api/v1/find-book/:id", bookController.deleteBook);
router.put("/api/v1/change-book/:id", bookController.putBook);

router.post(
  "/api/v1/comments",
  authMiddleware,
  commentController.createComment
);
router.get("/api/v1/comments", commentController.findAllComments);
router.get("/api/v1/comments/:id", commentController.findCommentById);
router.delete(
  "/api/v1/comments/:id",
  authMiddleware,
  commentController.deleteComment
);
router.put(
  "/api/v1/comments/:id",
  authMiddleware,
  commentController.putComment
);

router.post("/api/v1/create-rating", ratingController.createRating);
router.get("/api/v1/get-ratings", ratingController.findRatings);
router.get("/api/v1/find-rating/:id", ratingController.findRating);
router.delete("/api/v1/find-rating/:id", ratingController.deleteRating);
router.put("/api/v1/change-rating/:id", ratingController.putRating);

router.post("/api/v1/sign-up", userController.registration);
router.post("/api/v1/sign-in", userController.login);
router.get("/api/v1/auth", authMiddleware, userController.check);
router.get("/api/v1/get-users", userController.getUsers);
router.get("/api/v1/user/:id", authMiddleware, userController.getUserById);
router.put("/api/v1/user/:id", authMiddleware, userController.editUser);
router.get("/api/v1/current-user", authMiddleware, userController.currentUser);

router.post(
  "/api/v1/create-category",
  checkRole("admin"),
  categoryController.createCategory
);
router.put("/api/v1/change-categories/:id", categoryController.changeCategory);
router.delete("/api/v1/del-category/:id", categoryController.deleteCategory);
router.get("/api/v1/get-category", categoryController.findCategory);
router.get("/api/v1/find-category/:id", categoryController.findOneCategory);

router.post("/api/v1/create-order", ordersController.createOrder);
router.get("/api/v1/get-orders", ordersController.findOrdersAll);
router.get("/api/v1/find-order/:id", ordersController.findOrder);
router.delete("/api/v1/find-order/:id", ordersController.deleteOrder);
router.put("/api/v1/change-order/:id", ordersController.putOrder);

module.exports = router;
