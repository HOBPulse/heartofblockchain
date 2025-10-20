# Heart of Blockchain API Documentation

This document describes the REST API endpoints for the Heart of Blockchain crowdfunding platform.

## Base URL

```
http://localhost:3000/api
```

## Authentication

Currently, the API uses mock responses for operations that require wallet integration. In a production environment, these endpoints would require:

1. Wallet connection and signature verification
2. Transaction signing for blockchain operations
3. Proper authentication middleware

## Endpoints

### Campaigns

#### Get All Campaigns

```http
GET /api/campaigns
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "creator": "PublicKey",
      "name": "string",
      "description": "string",
      "target_amount": "number",
      "amount_donated": "number",
      "mint": "PublicKey",
      "threshold_reached": "boolean",
      "bump": "number"
    }
  ],
  "count": "number"
}
```

#### Get Specific Campaign

```http
GET /api/campaigns/{id}
```

**Parameters:**
- `id` (string): Campaign public key

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "creator": "PublicKey",
    "name": "string",
    "description": "string",
    "target_amount": "number",
    "amount_donated": "number",
    "mint": "PublicKey",
    "threshold_reached": "boolean",
    "bump": "number",
    "progress_percentage": "number",
    "is_funded": "boolean",
    "created_at": "string"
  }
}
```

#### Create Campaign

```http
POST /api/campaigns
```

**Request Body:**
```json
{
  "name": "string",
  "description": "string",
  "target_amount": "number",
  "creator_public_key": "string",
  "mint_address": "string" // optional
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "creator": "string",
    "name": "string",
    "description": "string",
    "target_amount": "number",
    "amount_donated": "number",
    "mint": "string",
    "threshold_reached": "boolean",
    "created_at": "string"
  },
  "message": "string"
}
```

#### Update Campaign

```http
PUT /api/campaigns/{id}
```

**Parameters:**
- `id` (string): Campaign public key

**Request Body:**
```json
{
  // Campaign fields to update
}
```

#### Delete Campaign

```http
DELETE /api/campaigns/{id}
```

**Parameters:**
- `id` (string): Campaign public key

### Donations

#### Donate to Campaign

```http
POST /api/campaigns/{id}/donate
```

**Parameters:**
- `id` (string): Campaign public key

**Request Body:**
```json
{
  "amount": "number",
  "donor_public_key": "string"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "campaign_id": "string",
    "donor": "string",
    "amount": "number",
    "transaction_signature": "string",
    "donated_at": "string"
  },
  "message": "string"
}
```

### Withdrawals

#### Withdraw from Campaign

```http
POST /api/campaigns/{id}/withdraw
```

**Parameters:**
- `id` (string): Campaign public key

**Request Body:**
```json
{
  "owner_public_key": "string"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "campaign_id": "string",
    "owner": "string",
    "amount_withdrawn": "number",
    "transaction_signature": "string",
    "withdrawn_at": "string"
  },
  "message": "string"
}
```

## Error Responses

All endpoints return consistent error responses:

```json
{
  "success": false,
  "error": "string",
  "details": "string" // optional
}
```

**Common HTTP Status Codes:**
- `200` - Success
- `400` - Bad Request (validation errors)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `500` - Internal Server Error

## Data Models

### Campaign

```typescript
interface Campaign {
  id: string;                    // Campaign public key
  creator: PublicKey;            // Creator's public key
  name: string;                  // Campaign name (max 50 chars)
  description: string;           // Campaign description (max 200 chars)
  target_amount: number;         // Target funding amount
  amount_donated: number;        // Current donated amount
  mint: PublicKey;              // Token mint address
  threshold_reached: boolean;    // Whether target has been reached
  bump: number;                 // PDA bump seed
}
```

### Donation

```typescript
interface Donation {
  campaign_id: string;          // Campaign public key
  donor: string;                // Donor's public key
  amount: number;               // Donation amount
  transaction_signature: string; // Transaction signature
  donated_at: string;           // ISO timestamp
}
```

### Withdrawal

```typescript
interface Withdrawal {
  campaign_id: string;          // Campaign public key
  owner: string;                // Campaign owner's public key
  amount_withdrawn: number;     // Amount withdrawn
  transaction_signature: string; // Transaction signature
  withdrawn_at: string;         // ISO timestamp
}
```

## Implementation Notes

### Current Status

The API endpoints are currently implemented with mock responses for blockchain operations. This is because:

1. **Wallet Integration**: Real transactions require wallet connection and signing
2. **Transaction Execution**: Solana transactions need to be properly constructed and submitted
3. **Error Handling**: Blockchain operations require robust error handling for failed transactions

### Next Steps for Full Implementation

1. **Wallet Integration**: Integrate with Solana wallet adapters (Phantom, Solflare, etc.)
2. **Transaction Building**: Use Anchor framework to build and send transactions
3. **Real-time Updates**: Implement WebSocket connections for real-time campaign updates
4. **Caching**: Add Redis or similar for caching frequently accessed data
5. **Rate Limiting**: Implement rate limiting to prevent abuse
6. **Authentication**: Add proper JWT-based authentication for user sessions

### Solana Program Integration

The API is designed to work with the Heart of Blockchain Solana program:

- **Program ID**: `3pgACwNx4AjBnqJzoeaXH26rLG9hVKqePTuaz64KXaQR`
- **Instructions**: create_campaign, donate, withdraw
- **Accounts**: Campaign, Donor, GlobalConfig

### Environment Variables

Required environment variables:

```env
SOLANA_RPC_URL=http://127.0.0.1:8899  # Solana RPC endpoint
```

## Testing

You can test the API endpoints using:

1. **Postman**: Import the collection and test individual endpoints
2. **curl**: Use curl commands for quick testing
3. **Frontend Integration**: The API is designed to work with the Next.js frontend

### Example curl Commands

```bash
# Get all campaigns
curl -X GET http://localhost:3000/api/campaigns

# Get specific campaign
curl -X GET http://localhost:3000/api/campaigns/3pgACwNx4AjBnqJzoeaXH26rLG9hVKqePTuaz64KXaQR

# Create campaign
curl -X POST http://localhost:3000/api/campaigns \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Campaign",
    "description": "A test campaign",
    "target_amount": 1000,
    "creator_public_key": "11111111111111111111111111111112"
  }'
```

