/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts.
The richest customer is the customer that has the maximum wealth.
 */

const maximumWealth = (accounts: number[][]): number => {
	return accounts.reduce((pre, cur) => {
		const actual = cur.reduce((pre, cur) => pre + cur, 0)
		return Math.max(pre, actual);
	}, 0);
};