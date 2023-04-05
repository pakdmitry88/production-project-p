/* eslint-disable i18next/no-literal-string */
import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>

export const VStack = (props: VStackProps) => {
    const { align = 'start' } = props;
    return (
        <Flex {...props} direction="column" align={align} />
    );
};
