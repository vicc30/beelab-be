class User {
    constructor(id, firstName, lastName, email, phone, notifications, password, avatar, deleted, createdAt) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.notifications = notifications;
        this.password = password;
        this.avatar = avatar;
        this.deleted = deleted;
        this.createdAt = createdAt;
    }
}

module.exports = User;