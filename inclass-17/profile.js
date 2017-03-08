
const index = (req, res) => {
     res.send({ hello: 'world' })
}

const putHeadline = (req, res) => {
  res.send({headlines: [{
          username: 'sep1',
          headline: req.body.headline || 'could not be displayed',
  }]})
}

const getHeadlineUser = (req, res) => {
  res.send({headlines: [{username: 'Scott', status: 'Happy' }]})
}

const getAvatarUser = (req, res) => {
  res.send({avatars: [{username: 'Scott', avatar: 'avy' }]})
}

const getEmailUser = (req, res) => {
  res.send({username: 'Scott', email: 'scott@rice.edu' })
}

const getZipcodeUser = (req, res) => {
  res.send({username: 'Scott', zipcode: 'Happy' })
}

const putEmail = (req, res) => {
  res.send({
          username: 'sep1',
          email: req.body.email || 'could not be displayed',
  })
}

const putZipcode = (req, res) => {
  res.send({
          username: 'sep1',
          zipcode: req.body.zipcode || 'could not be displayed',
  })
}

const putAvatar = (req, res) => {
  res.send({
          username: 'sep1',
          avatar: req.body.avatar || 'could not be displayed',
  })
}


module.exports = app => {
     app.get('/', index)
     app.put('/headline', putHeadline)
     app.get('/headlines/:user?', getHeadlineUser)
     app.get('/email/:user?', getEmailUser)
     app.put('/email', putEmail)
     app.put('/zipcode', putZipcode)
     app.get('/zipcode/:user?', getZipcodeUser)
     app.put('/avatar', putAvatar)
     app.get('/avatars/:user?', getAvatarUser)
}
