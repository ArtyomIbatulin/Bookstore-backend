// написать модель под wishList

// import from db

const likeBook = async (req, res) => {
  const { bookId } = req.body;
  const userId = req.user.id;

  try {
    if (!bookId) {
      return res.status(400).json({ message: "Нет bookId" });
    }
    const existingLike = await db.Wihslist.findOne({
      where: { bookId, userId },
    });

    if (existingLike) {
      return res.status(400).json({ message: "Уже стоит лайк" });
    }

    const like = await db.Wihslist.create({
      bookId,
      userId,
    });

    return res.status(201).json(like);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "error" });
  }
};

const unlikeBook = async (req, res) => {};

module.exports = {
  likeBook,
  unlikeBook,
};
