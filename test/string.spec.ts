import { capitalizeFirstLetter } from '../src/string';


describe('String', () => {

  describe('String.capitalizeFirstLetter', () => {

    it('should capitalize the first letter of a string', () => {
      const str = 'hello world';
      const result = capitalizeFirstLetter(str);
      expect(result).toBe('Hello world');
    });

    it('should return the same string if it is already capitalized', () => {
      const str = 'Hello world';
      const result = capitalizeFirstLetter(str);
      expect(result).toBe('Hello world');
    });

    it('should return an empty string if the input is an empty string', () => {
      const str = '';
      const result = capitalizeFirstLetter(str);
      expect(result).toBe('');
    });

    it('should return the same string if the first character is not a letter', () => {
      const str = '12345';
      const result = capitalizeFirstLetter(str);
      expect(result).toBe('12345');
    });

    it('should return the same string if the first character is a special character', () => {
      const str = '!@#$%^&*()';
      const result = capitalizeFirstLetter(str);
      expect(result).toBe('!@#$%^&*()');
    });

    it('should return the same string if the first character is a space', () => {
      const str = ' hello world';
      const result = capitalizeFirstLetter(str);
      expect(result).toBe(' hello world');
    });

    it('should return string empty if the input is null', () => {
      const str = null;
      const result = capitalizeFirstLetter(str);
      expect(result).toBe('');
    });

  });

});
