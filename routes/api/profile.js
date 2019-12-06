const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

//NOTE  GET SINGLE PROFILE BY ID BUT PRIVATE AND CHECK AUTH
// @route   Get api/profile/me
// @desc    Get current users profile
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate("user", ["name", "avatar"]);
    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//NOTE  ADD USERS PROFILE BUT PRIVATE
// @route   Post api/profile/
// @desc    ADD users profile
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("phone", "Phone is required")
        .not()
        .isEmpty(),
      check("bio", "Bio is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      website,
      phone,
      location,
      bio,
      youtube,
      facebook,
      twitter,
      instagram,
      linkedin
    } = req.body;
    //REVIEW  Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (phone) profileFields.phone = phone;

    //REVIEW  Build socail object
    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (instagram) profileFields.social.instagram = instagram;

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        //Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }
      //Create
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//NOTE GET ALL USER PROFILE
// @route   Get api/profile/
// @desc    Get all user profile
// @access  Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//NOTE  GET SINGLE USER PROFILE BY ID BUT PUBLIC
// @route   Get api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate("user", ["name", "avatar"]);
    if (!profile)
      return res.status(400).json({ msg: "There is no profile for this user" });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//NOTE DELETE PROFILE, USER AND POST BUT PRIVATE AND CHECK AUTH
// @route   Delete api/profile/
// @desc    Delete Prfilte , user & post
// @access  Private
router.delete("/", auth, async (req, res) => {
  try {
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: "User delete" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//NOTE  ADD PROFILE EXPERIENCE BUT PRIVATE AND CHECK AUTH
// @route   PUT api/profile/experience
// @desc    Add Prfilte experience
// @access  Private
// router.put(
//   "/experience",
//   [
//     auth,
//     [
//       check("title", "title is required")
//         .not()
//         .isEmpty(),
//       check("company", "company is required")
//         .not()
//         .isEmpty(),
//       check("from", "From date is required")
//         .not()
//         .isEmpty()
//     ]
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     const {
//       title,
//       company,
//       location,
//       from,
//       to,
//       current,
//       description
//     } = req.body;
//     const newExp = {
//       title,
//       company,
//       location,
//       from,
//       to,
//       current,
//       description
//     };
//     try {
//       const profile = await Profile.findOne({ user: req.user.id });
//       profile.experience.unshift(newExp);
//       await profile.save();
//       res.json(profile);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server Error");
//     }
//   }
// );
//NOTE  DELETE PROFILE EXPERIENCE BUT PRIVATE AND CHECK AUTH
// @route   DELETE api/profile/experience/:exp_id
// @desc    DELETE Prfilte experience
// @access  Private
// router.delete("/experience/:exp_id", auth, async (req, res) => {
//   try {
//     const profile = await Profile.findOne({ user: req.user.id });
//     //Get remove index
//     const removeIndex = profile.experience
//       .map(item => item.id)
//       .indexOf(req.params.exp_id);
//     profile.experience.splice(removeIndex, 1);
//     await profile.save();
//     res.json(profile);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

//NOTE  ADD PROFILE EDUCATION BUT PRIVATE AND CHECK AUTH
// @route   PUT api/profile/education
// @desc    Add Prfilte education
// @access  Private
// router.put(
//   "/education",
//   [
//     auth,
//     [
//       check("school", "school is required")
//         .not()
//         .isEmpty(),
//       check("degree", "degree is required")
//         .not()
//         .isEmpty(),
//       check("fieldofstudy", "fieldofstudy is required")
//         .not()
//         .isEmpty(),
//       check("from", "From date is required")
//         .not()
//         .isEmpty()
//     ]
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     const {
//       school,
//       degree,
//       fieldofstudy,
//       from,
//       to,
//       current,
//       description
//     } = req.body;
//     const newEdu = {
//       school,
//       degree,
//       fieldofstudy,
//       from,
//       to,
//       current,
//       description
//     };
//     try {
//       const profile = await Profile.findOne({ user: req.user.id });
//       profile.education.unshift(newEdu);
//       await profile.save();
//       res.json(profile);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server Error");
//     }
//   }
// );

//NOTE  DELETE PROFILE EDUCATION BUT PRIVATE AND CHECK AUTH
// @route   DELETE api/profile/education/:edu_id
// @desc    DELETE Prfilte education
// @access  Private
// router.delete("/education/:edu_id", auth, async (req, res) => {
//   try {
//     const profile = await Profile.findOne({ user: req.user.id });
//     //Get remove index
//     const removeIndex = profile.education
//       .map(item => item.id)
//       .indexOf(req.params.edu_id);
//     profile.education.splice(removeIndex, 1);
//     await profile.save();
//     res.json(profile);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

module.exports = router;
