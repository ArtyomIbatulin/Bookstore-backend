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

const unlikeBook = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  if (!id) {
    return res.status(400).json({ message: "Уже есть дизлайк" });
  }

  try {
    const existingLike = await db.Wihslist.findOne({
      where: { bookId: id, userId },
    });

    if (!existingLike) {
      return res.status(400).json({ message: "Лайка нет" });
    }

    const like = await db.Wihslist.delete({
      where: { bookId: id, userId },
    });

    return res.json(like);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  likeBook,
  unlikeBook,
};
