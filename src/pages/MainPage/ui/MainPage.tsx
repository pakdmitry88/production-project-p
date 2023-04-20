/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups/components/ListBox/ListBox';
import { HStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page/Page';

// eslint-disable-next-line arrow-body-style
const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
            <div>asdfasdfasdf</div>
            <HStack>
                <div>asdasd</div>
                <ListBox
                    defaultValue="Choose options"
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '123' },
                        { value: '2', content: '234', disabled: true },
                        { value: '3', content: '145' },
                    ]}
                />
            </HStack>
            <div>asdfasdfasdf</div>
            <div>asdfasdfasdf</div>
            <div>asdfasdfasdf</div>
            <div>asdfasdfasdf</div>
            <div>asdfasdfasdf</div>
            <div>asdfasdfasdf</div>
        </Page>
    );
};

export default MainPage;
