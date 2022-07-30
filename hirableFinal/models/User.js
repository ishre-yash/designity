const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: {
      primary: { type: String, required: true, unique: true },
      secondary: { type: String, unique: true },
    },
    mobileNumber: {
      primary: { type: Number, required: true, unique: true },
      secondary: { type: Number, unique: true },
    },
    location: {
      country: { type: String, required: true },
      timezone: { type: String, required: true },
    },
    college: {
      collegeName: { type: String, required: true },
      graduationYear: { type: Number, required: true },
      degree: { type: String, required: true },
      major: { type: String, required: true },
    },
    about: { type: String, required: true },
    roles: { type: [String], required: true },
    experience: { type: [String], required: true },
    skills: { type: [String], required: true },
  },
  { timestamps: true }
);

// mongoose.models = {};
// export default mongoose.model("User", UserSchema);
export default mongoose.models.User || mongoose.model('User', UserSchema);
