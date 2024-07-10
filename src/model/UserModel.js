class Location {
    constructor(city, country) {
      this.city = city;
      this.country = country;
    }
  
    static fromJson(json) {
      return new Location(json.city, json.country);
    }
  }
  
  class Profile {
    constructor(firstName, lastName, age, gender, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.location = location;
    }
  
    static fromJson(json) {
      return new Profile(
        json.first_name,
        json.last_name,
        json.age,
        json.gender,
        Location.fromJson(json.location)
      );
    }
  }
  
  class Preferences {
    constructor(language, timezone) {
      this.language = language;
      this.timezone = timezone;
    }
  
    static fromJson(json) {
      return new Preferences(json.language, json.timezone);
    }
  }
  
  class UserModel {
    constructor(
      userId,
      username,
      email,
      profile,
      preferences,
      accountStatus,
      createdAt,
      lastLogin
    ) {
      this.userId = userId;
      this.username = username;
      this.email = email;
      this.profile = profile;
      this.preferences = preferences;
      this.accountStatus = accountStatus;
      this.createdAt = createdAt;
      this.lastLogin = lastLogin;
    }
  
    static fromJson(json) {
      return new UserModel(
        json.user_id,
        json.username,
        json.email,
        Profile.fromJson(json.profile),
        Preferences.fromJson(json.preferences),
        json.account_status,
        json.created_at,
        json.last_login
      );
    }
  }
  
  class ApiResponse {
    constructor(code, msg, data) {
      this.code = code;
      this.msg = msg;
      this.data = data;
    }
  
    static fromJson(json) {
      return new ApiResponse(
        json.code,
        json.msg,
        UserModel.fromJson(json.data)
      );
    }
  }
  
  export default ApiResponse;