describe('basic parseInt() use cases', () => {
  test.each([
    0,
    1,
    '0',
    '1',
    'one two three',
    '1,200,300',
    new Number(1234),
    '2e5',
    9007199254740995,
    '1 horse',
    'horse 123',
    undefined,
    null,
  ])('parseInt(%s)', (arg) => {
    console.debug(`${arg} -> «${parseInt(arg)}»`)
  })
})
