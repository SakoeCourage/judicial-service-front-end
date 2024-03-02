import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import { toast, ToastOptions } from "react-hot-toast";
import { cva } from "class-variance-authority";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatnumber(num: number): string | undefined {
  if (typeof Number(num) !== "number") {
    return undefined;
  }
  return new Intl.NumberFormat("en-US").format(num);
}

export function formatcurrency(amount: number): string | undefined {
  if (!amount) return;

  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GHS",
    notation: "standard",
  }).format(amount);

  return formattedAmount;
}

export function dateReformat(date: string | Date): string | undefined {
  if (date) {
    return dayjs(date).format("YYYY/MMM/DD");
  }
}

export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
) => {
  let timeoutId: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId as NodeJS.Timeout);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export function isNullOrWhitespace(input: string | null | undefined): boolean {
  return input === null || input === undefined || /^\s*$/.test(input);
}


export function updateUrlQueryParam(
  url: string,
  key: string,
  value: string | null
): string {
  const urlObject = new URL(url);
  const queryParams = new URLSearchParams(urlObject.search);

  if (value === null || value === "") {
    if (queryParams.has(key)) {
      queryParams.delete(key);
    }
  } else {
    if (queryParams.has(key)) {
      queryParams.set(key, value);
    } else {
      queryParams.append(key, value);
    }
  }

  urlObject.search = queryParams.toString();

  return urlObject.toString();
}

export function getQueryParamValue(url: string, key: string): string | null {
  const urlObject = new URL(url);
  const queryParams = new URLSearchParams(urlObject.search);

  const paramValue = queryParams.get(key);

  return paramValue;
}

export function extractQueryParams(
  url: string
): Record<string, string> | undefined {
  if (url == null || url == undefined) return;
  const urlObject = new URL(url);
  const queryParams = new URLSearchParams(urlObject.search);
  const result: Record<string, string> = {};

  queryParams.forEach((value, key) => {
    result[key] = value;
  });

  return result;
}

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const showError = (err: string, options?: ToastOptions) => {
  return toast.error(err, { id: err, ...options });
};

export const showSuccess = (err: string, options?: ToastOptions) => {
  return toast.success(err, { id: err, ...options });
};

interface ToastPromiseOptions {
  promise: Promise<any>;
  loading: string;
  success: string;
  error: string;
  options?: ToastOptions;
}

export const showPromise = async ({
  promise,
  loading,
  success,
  error,
  options,
}: ToastPromiseOptions) => {
  try {
    toast.loading(loading, options);

    const result = await promise;

    toast.success(success, { ...options, id: success });

    return result;
  } catch (err) {
    toast.error(error, { ...options, id: error });
    throw err;
  }
};
