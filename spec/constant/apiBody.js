const apiBody = {
    beneficiaryAddress: '0xcc1190D3Aad29b3E29FD435B793A830e8ccFE464',
    totalTokens: 2.364824,
    claimedTokens: 0,
    claimableTokens: 1.6520,
    walletAddress: '0xcc1190D3Aad29b3E29FD435B793A830e8ccFE464',
    vestingID: 5,
    network: 80001,
    startDate: 2023-05-16,
    endDate: 2023-05-17,
    cliff: 0,
    slice: 1,
    tokenAddress: '0x25dcF0D3Aad29b3E29FD435B793A830e8ccFE464',
    tokenName: 'test coin',
    tokenSymbol: 'TVDS',
    
  };

  const apiBodyWithdraw = {
    beneficiaryAddress: '0xcc1190D3Aad29b3E29FD435B793A830e8ccFE464',
    vestingID: 5,
    network: 80001,
    amount:1.2,
    getclaimableTokens: 1.2
  }
  module.exports = {apiBody,apiBodyWithdraw}