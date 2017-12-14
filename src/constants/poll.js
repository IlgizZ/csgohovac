let test =
{
  '0': {
    'title': 'Did you graduate from higher education?',
    'type': 'Multiple choice',
    'answers': [
      {
        'answer': 'yes',
        'successor': '1'
      },
      {
        'answer': 'no',
        'successor': '2'
      }
    ]
  },
  '1': {
    'title': 'Degree of your education',
    'type': 'Multiple choice',
    'answers': [
      {
        'answer': 'master',
        'successor': '2'
      },
      {
        'answer': 'bachelor',
        'successor': '2'
      },
      {
        'answer': 'higher than listed',
        'successor': '2'
      }
    ]
  },
  '2': {
    'title': 'In which area are you developing?',
    'type': 'Free answer',
    'successor': '3'
  },
  '3': {
    'title': 'What skills do you have in this field? List them (ReactJS, NodeJS, ...)',
    'type': 'Free answer',
    'successor': '4'
  },
  '4': {
    'title': 'Do you work in any other field?',
    'type': 'Multiple choice',
    'answers': [
      {
        'answer': 'yes',
        'successor': '2'
      },
      {
        'answer': 'no',
        'successor': '5'
      }
    ]
  },
  '5': {
    'title': 'Do you have any experience in the IT field?',
    'type': 'Multiple choice',
    'answers': [
      {
        'answer': 'yes',
        'successor': '6'
      },
      {
        'answer': 'no',
        'successor': 'end'
      }
    ]
  },
  '6': {
    'title': 'What is it?',
    'type': 'Multiple choice',
    'answers': [
      {
        'answer': 'Big company',
        'successor': '7'
      },
      {
        'answer': 'Startup',
        'successor': '7'
      },
      {
        'answer': 'Freelance',
        'successor': '7'
      }
    ]
  },
  '7': {
    'title': 'How long did you work there?',
    'type': 'Free answer',
    'successor': '8'
  },
  '8': {
    'title': 'Have you worked remotely?',
    'type': 'Multiple choice',
    'answers': [
      {
        'answer': 'yes',
        'successor': '9'
      },
      {
        'answer': 'no',
        'successor': '9'
      }
    ]
  },
  '9': {
    'title': 'Were you paid in hours or a month?',
    'type': 'Multiple choice',
    'answers': [
      {
        'answer': 'hours',
        'successor': '10'
      },
      {
        'answer': 'month',
        'successor': '10'
      }
    ]
  },
  '10': {
    'title': 'What is the amount?',
    'type': 'Free answer',
    'successor': '11'
  },
  '11': {
    'title': 'Have you worked anywhere else?',
    'type': 'Multiple choice',
    'answers': [
      {
        'answer': 'yes',
        'successor': '6'
      },
      {
        'answer': 'no',
        'successor': 'end'
      }
    ]
  }
}
export default test
