import React, { useState } from 'react';
import { App } from '../../config/app.ts';
import { Button, FormLayout, LegacyCard, Link, Text, TextField } from 'pcs-polaris';
import '../../sass/pages/_login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    location.href = '/home';
  };

  return (
    <div className={'Polaris-Custom'}>
      <div className='Polaris-InstallPage'>
        <LegacyCard>
          <LegacyCard.Section>
            <FormLayout>
              <center>
                <div className='Polaris-InstallPage--HeadingImage'>
                  <img src={App.logo_full_svg} alt='Logo' />
                </div>
              </center>
              <Text as={'h2'} variant={'headingMd'}>
                Đăng nhập hệ thống {App.name}
              </Text>
              <TextField
                label={'Tên đăng nhập'}
                placeholder='Nhập tên đăng nhập'
                autoComplete={'off'}
                value={username}
                onChange={(value: string) => setUsername(value)}
              />
              <TextField
                label={'Mật khẩu'}
                placeholder='Nhập mật khẩu của bạn'
                autoComplete={'off'}
                value={password}
                onChange={(value: string) => setPassword(value)}
              />
              <Button primary onClick={() => handleSubmit()}>
                Đăng nhập
              </Button>

              <Text as={'span'} variant={'bodyMd'}>
                Quên mật khẩu?{' '}
                <Text as={'span'} variant={'bodyMd'}>
                  <Link removeUnderline>Lấy lại mật khẩu</Link>
                </Text>
              </Text>
            </FormLayout>
          </LegacyCard.Section>
        </LegacyCard>
      </div>
    </div>
  );
};

export default Login;
