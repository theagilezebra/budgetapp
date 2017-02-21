import React from 'react';
import PlaidLink from 'react-plaid-link';
import { connect } from 'react-redux';
import { linkAccounts } from '../actions/accountActions';

const AddBank = ({ dispatch, error }) => {
  const handleOnSuccess = (public_token, metadata) => {
    dispatch(linkAccounts({ public_token, institutionName: metadata.institution.name }));
  };

  return (
    <div>
      <PlaidLink
        publicKey="test_key"
        product="connect"
        env="tartan"
        clientName="Bolster"
        onSuccess={handleOnSuccess}
      />
      <p className="error-message">{error}</p>
    </div>
  );
};

export default connect(state => ({
  error: state.error.link,
}))(AddBank);
