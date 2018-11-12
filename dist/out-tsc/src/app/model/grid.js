var Grid = /** @class */ (function () {
    function Grid() {
        this.state = [[CardType.NORMAL, CardType.NORMAL, CardType.NORMAL], [CardType.NOT_RAMU, CardType.RAMU, CardType.NOT_RAMU], [CardType.NORMAL, CardType.NORMAL, CardType.NORMAL]];
    }
    return Grid;
}());
export { Grid };
export function getCardType(num) {
    switch (num) {
        case "0": return CardType.NORMAL;
        case "1": return CardType.NOT_RAMU;
        case "2": return CardType.RAMU;
    }
}
export var CardType;
(function (CardType) {
    CardType[CardType["NORMAL"] = 0] = "NORMAL";
    CardType[CardType["NOT_RAMU"] = 1] = "NOT_RAMU";
    CardType[CardType["RAMU"] = 2] = "RAMU";
})(CardType || (CardType = {}));
//# sourceMappingURL=grid.js.map