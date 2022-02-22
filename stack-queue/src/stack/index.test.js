import { Stack } from "."

describe('Stack', () => {

  let tasks;

  beforeEach(()=> {
    tasks = new Stack()
  })

  test('should have default properties', () => {
    expect(tasks._author).toBe('subhamkumarchandrawansi@gmail.com')
  })

  test('should push', () => {
    expect(tasks.length).toBe(0)
    tasks.push(22)
    expect(tasks.length).toBe(1)
  })

  test('should pop', () => {
    expect(tasks.length).toBe(0)
    tasks.push(22)
    expect(tasks.length).toBe(1)
	  tasks.pop()
  })

  test('peek', () => {
    expect(tasks.length).toBe(0)
    tasks.push(22)
    tasks.push(233)
    expect(tasks.peek()).toBe(233)
  })

})

