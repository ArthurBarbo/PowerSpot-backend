import User from "../models/user.js";

export const getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate("favorites");
    if (!user)
      return res.status(404).json({ message: "Usuário não encontrado" });
    res.status(200).json(user.favorites);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar favoritos" });
  }
};

export const addFavorite = async (req, res) => {
  try {
    const { cardId } = req.body;
    if (!cardId)
      return res.status(400).json({ message: "cardId é obrigatório" });

    const user = await User.findById(req.userId);
    if (!user)
      return res.status(404).json({ message: "Usuário não encontrado" });

    if (!user.favorites.includes(cardId)) {
      user.favorites.push(cardId);
      await user.save();
    }

    res.status(200).json({ favorites: user.favorites });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao adicionar favorito" });
  }
};

export const removeFavorite = async (req, res) => {
  try {
    const { cardId } = req.body;
    if (!cardId)
      return res.status(400).json({ message: "cardId é obrigatório" });

    const user = await User.findById(req.userId);
    if (!user)
      return res.status(404).json({ message: "Usuário não encontrado" });

    user.favorites = user.favorites.filter((fav) => fav !== cardId);
    await user.save();

    res.status(200).json({ favorites: user.favorites });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao remover favorito" });
  }
};
