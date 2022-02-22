import { longestParentheses } from './index.js';

describe("longest parenthese", function() {
	test("with empty string should return 0", function() {
	{
		expect(longestParentheses("")).toBe(0);
	}

	test("with ()) should return 2", function() {
	{
		expect(longestParentheses("())")).toBe(2);
	}
	
	});
});
