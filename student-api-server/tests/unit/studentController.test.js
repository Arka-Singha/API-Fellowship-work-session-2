const { validateStudent } = require('../../controllers/studentController');

describe('Student Validator Function', () => {
  it('should return true for valid student object', () => {
    const student = {
      name: 'Arka Singha',
      email: 'arka@example.com',
      course: 'Backend Engineering'
    };
    expect(validateStudent(student)).toBeTruthy();
  });

  it('should return false if name is missing', () => {
    const student = {
      email: 'arka@example.com',
      course: 'Backend Engineering'
    };
    expect(validateStudent(student)).toBeFalsy();
  });

  it('should return false if email is missing', () => {
    const student = {
      name: 'Arka Singha',
      course: 'Backend Engineering'
    };
    expect(validateStudent(student)).toBeFalsy();
  });

  it('should return false if course is missing', () => {
    const student = {
      name: 'Arka Singha',
      email: 'arka@example.com'
    };
    expect(validateStudent(student)).toBeFalsy();
  });

  it('should return false if all fields are missing', () => {
    const student = {};
    expect(validateStudent(student)).toBeFalsy();
  });
});
