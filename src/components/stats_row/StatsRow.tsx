import { FC } from "react";

interface StatsProps {
    text: string;
    value: number | string;
}

const StatsRow: FC<StatsProps> = ({
  text,
  value,
}) => (
  <div>{text}: <b>{value}</b></div>
);

export default StatsRow;
