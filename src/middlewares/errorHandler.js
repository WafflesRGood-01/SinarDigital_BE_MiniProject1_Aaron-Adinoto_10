export default (error, req, res, next) => {
  res.status(500).json({
    success: false,
    message: "Something went wrong, the confession booth is closed."
  });
};
