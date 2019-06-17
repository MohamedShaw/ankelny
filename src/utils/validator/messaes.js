const messages = {
  // English language - Used by default
  'en-US': {
    numbers: '{0} must be a valid number',
    email: 'يجب إدخال بريد الكتروني صحيح.',
    required: 'This field required',
    username: 'يجب إدخال اسم مستخدم صحيح.',
    username_or_email: 'يجب إدخال اسم مستخدم/بريد إلكتروني صحيح.',
    password: 'كلمة المرور يجب أن لا تقل عن ٦ أحرف',
    mobile: 'من فضلك قم بإدخال رقم جوال صحيح.',
    date: '{0} must be a valid date ({1})',
    minlength: '{0} length must be greater than {1}',
    maxlength: '{0} length must be lower than {1}',
    match: "Password doesn't match"
  },
  'ar-PS':{
    required:'هذا الحقل مطلوب.'
  }
};

export default messages;