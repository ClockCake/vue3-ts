class UserModel {
    constructor(createdAt,avatar,name,id) {
        this.createdAt = createdAt;
        this.avatar = avatar;
        this.name = name;
        this.id = id;
    }
    static fromJson(json) {
        return new UserModel(
            json.createdAt,
            json.avatar,
            json.name,
            json.id
        );
    }
}
export default UserModel; // 使用默认导出