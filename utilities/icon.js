import { Ionicons } from '@expo/vector-icons';

export default function Icon({ icon, size, color, iconStyle }) {
  return <Ionicons name={icon} size={size} color={color} style={iconStyle} />;
}
