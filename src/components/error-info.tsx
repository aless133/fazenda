import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error; // The error object
  resetErrorBoundary?: () => void; // Function to reset the error boundary
}

export function ErrorInfo({ error, resetErrorBoundary }: ErrorProps) {
  return (
    <div className="text-center my-40">
      <div className="my-4">Упс. Произошла ошибка!</div>
      <div className="my-4 text-destructive">{error.message}</div>
      {!!resetErrorBoundary ? (
        <div className="my-4">
          <Button onClick={resetErrorBoundary}>Попробовать еще раз</Button>
        </div>
      ) : null}
    </div>
  );
}
