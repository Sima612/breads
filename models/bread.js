// REQUIRE MONGOOSE
const mongoose = require('mongoose')
const {Schema} = mongoose // creating shorthand for schema constructor

// SCHEMA
const breadSchema = new Schema({
  name: {type: String, required: true},
  hasGluten: {Boolean},
  image: {type: String, default: '/images/default-bread.jpeg'},
  baker: {
    type: Schema.Types.ObjectId,
    ref: 'Baker'
  }
})

// HELPER METHODS **INSTANCE
breadSchema.methods.getBakedBy = function() {
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}

// MODEL AND EXPORT
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread
