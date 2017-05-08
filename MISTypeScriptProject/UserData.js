var UserData = (function () {
    function UserData() {
    }
    Object.defineProperty(UserData.prototype, "PlayerName", {
        get: function () {
            return this.PlayerName;
        },
        set: function (the_PlayerName) {
            this._PlayerName = the_PlayerName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "PlayerDiff", {
        get: function () {
            return this._PlayerDiff;
        },
        set: function (the_PlayerDiff) {
            this._PlayerDiff = the_PlayerDiff;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "PlayerScore", {
        get: function () {
            return this._PlayerScore;
        },
        set: function (the_PlayerScore) {
            this._PlayerScore = the_PlayerScore;
        },
        enumerable: true,
        configurable: true
    });
    return UserData;
})();
//# sourceMappingURL=UserData.js.map