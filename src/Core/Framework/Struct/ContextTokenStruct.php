<?php declare(strict_types=1);

namespace Shopware\Core\Framework\Struct;

use Shopware\Core\PlatformRequest;

/**
 * @package core
 */
class ContextTokenStruct extends Struct
{
    /**
     * @var string
     */
    protected $token;

    public function __construct(string $token)
    {
        $this->token = $token;
    }

    public function getToken(): string
    {
        return $this->token;
    }

    public function jsonSerialize(): array
    {
        $data = parent::jsonSerialize();

        unset($data['token']);

        $data[PlatformRequest::HEADER_CONTEXT_TOKEN] = $this->getToken();

        return $data;
    }

    public function getApiAlias(): string
    {
        return 'context_token';
    }
}
