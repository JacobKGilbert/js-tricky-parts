function curriedAdd(total) {
  if (!total) return 0

  const add = (num) => {
    if (!num) return total
    total += num
    return add
  }

  return add
}

module.exports = { curriedAdd };
