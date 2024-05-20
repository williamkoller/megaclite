export interface HealthCheckHttpInterface {
  healthCheck(): { message: string };
  redirectToHealthCheck(): void;
}
